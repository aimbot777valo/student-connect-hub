import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Star, MapPin, DollarSign } from 'lucide-react';

interface Hostel {
  id: string;
  name: string;
  description: string;
  price: string;
  distance: string;
  amenities: string[];
  images: string[];
  rating: number;
}

interface Review {
  id: string;
  rating: number;
  comment: string;
  created_at: string;
  profiles: {
    name: string;
  };
}

export default function Hostels() {
  const [hostels, setHostels] = useState<Hostel[]>([]);
  const [selectedHostel, setSelectedHostel] = useState<Hostel | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newRating, setNewRating] = useState(5);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    loadHostels();
  }, []);

  useEffect(() => {
    if (selectedHostel) {
      loadReviews(selectedHostel.id);
    }
  }, [selectedHostel]);

  const loadHostels = async () => {
    const { data } = await supabase
      .from('hostels')
      .select('*')
      .order('rating', { ascending: false });
    
    if (data) {
      setHostels(data);
    }
  };

  const loadReviews = async (hostelId: string) => {
    const { data } = await supabase
      .from('hostel_reviews')
      .select('*, profiles(name)')
      .eq('hostel_id', hostelId)
      .order('created_at', { ascending: false });
    
    if (data) {
      setReviews(data);
    }
  };

  const handleAddReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase
      .from('hostel_reviews')
      .insert({
        hostel_id: selectedHostel!.id,
        rating: newRating,
        comment: formData.get('comment') as string,
        user_id: user!.id
      });

    if (error) {
      toast({ variant: "destructive", title: "Error", description: error.message });
    } else {
      toast({ title: "Success", description: "Review posted!" });
      loadReviews(selectedHostel!.id);
      e.currentTarget.reset();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Hostels</h1>
        <p className="text-muted-foreground">Find the perfect accommodation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hostels.map((hostel) => (
          <Card 
            key={hostel.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedHostel(hostel)}
          >
            <div className="aspect-video bg-muted flex items-center justify-center">
              <Building className="h-12 w-12 text-muted-foreground" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">{hostel.name}</h3>
              <div className="flex items-center gap-4 mb-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  <span>{hostel.price}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{hostel.distance}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "h-4 w-4",
                      i < Math.round(hostel.rating) ? "fill-current" : ""
                    )} 
                  />
                ))}
                <span className="text-sm ml-1 text-foreground">{hostel.rating}</span>
              </div>
              <div className="flex gap-2">
                {hostel.amenities?.slice(0, 3).map(amenity => (
                  <span key={amenity} className="text-xs bg-secondary px-2 py-1 rounded">{amenity}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedHostel && (
        <Dialog open={!!selectedHostel} onOpenChange={() => setSelectedHostel(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedHostel.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="aspect-video bg-muted flex items-center justify-center rounded-lg">
                <Building className="h-24 w-24 text-muted-foreground" />
              </div>
              
              <div>
                <p className="mb-4">{selectedHostel.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">{selectedHostel.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>{selectedHostel.distance}</span>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  {selectedHostel.amenities?.map(amenity => (
                    <span key={amenity} className="text-sm bg-secondary px-3 py-1 rounded">{amenity}</span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold mb-4">Reviews ({reviews.length})</h3>
                <div className="space-y-4 mb-6">
                  {reviews.map(review => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1 text-yellow-500">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={cn(
                                  "h-4 w-4",
                                  i < review.rating ? "fill-current" : ""
                                )} 
                              />
                            ))}
                          </div>
                          <span className="text-sm font-semibold">{review.profiles?.name}</span>
                        </div>
                        <p className="text-sm">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h3 className="font-bold mb-2">Add Your Review</h3>
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <div className="flex gap-2 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i}
                          className={cn(
                            "h-6 w-6 cursor-pointer transition-colors",
                            i < newRating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
                          )}
                          onClick={() => setNewRating(i + 1)}
                        />
                      ))}
                    </div>
                  </div>
                  <Textarea name="comment" placeholder="Write your review..." required />
                  <Button type="submit">Post Review</Button>
                </form>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

function Building({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}