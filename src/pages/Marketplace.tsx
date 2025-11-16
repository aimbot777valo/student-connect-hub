import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Plus } from 'lucide-react';

interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  condition: string;
  category: string;
  images: string[];
  user_id: string;
  profiles: {
    name: string;
  };
}

export default function Marketplace() {
  const [items, setItems] = useState<MarketplaceItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(null);
  const [createOpen, setCreateOpen] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const { data } = await supabase
      .from('marketplace_items')
      .select('*, profiles(name)')
      .order('created_at', { ascending: false });
    
    if (data) {
      setItems(data);
    }
  };

  const handleCreateItem = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase
      .from('marketplace_items')
      .insert({
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        price: Number(formData.get('price')),
        condition: formData.get('condition') as string,
        category: formData.get('category') as string,
        images: [],
        user_id: user!.id
      });

    if (error) {
      toast({ variant: "destructive", title: "Error", description: error.message });
    } else {
      toast({ title: "Success", description: "Item listed successfully!" });
      setCreateOpen(false);
      loadItems();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Marketplace</h1>
          <p className="text-muted-foreground">Buy and sell with fellow students</p>
        </div>
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="mr-2 h-4 w-4" /> Create Listing</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Listing</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateItem} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" required />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" required />
              </div>
              <div>
                <Label htmlFor="price">Price ($)</Label>
                <Input id="price" name="price" type="number" step="0.01" required />
              </div>
              <div>
                <Label htmlFor="condition">Condition</Label>
                <Input id="condition" name="condition" placeholder="e.g., New, Like New, Used" required />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input id="category" name="category" placeholder="e.g., Books, Electronics" required />
              </div>
              <Button type="submit" className="w-full">Create Listing</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Card 
            key={item.id} 
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedItem(item)}
          >
            <div className="aspect-video bg-muted flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-2xl font-bold text-primary">${item.price}</p>
              <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              <div className="mt-2 flex gap-2">
                <span className="text-xs bg-secondary px-2 py-1 rounded">{item.condition}</span>
                <span className="text-xs bg-secondary px-2 py-1 rounded">{item.category}</span>
              </div>
              <p className="text-sm mt-2">Seller: {item.profiles?.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedItem.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="aspect-video bg-muted flex items-center justify-center rounded-lg">
                <ShoppingBag className="h-24 w-24 text-muted-foreground" />
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">${selectedItem.price}</p>
                <p className="mt-4">{selectedItem.description}</p>
                <div className="mt-4 flex gap-2">
                  <span className="text-sm bg-secondary px-3 py-1 rounded">{selectedItem.condition}</span>
                  <span className="text-sm bg-secondary px-3 py-1 rounded">{selectedItem.category}</span>
                </div>
                <p className="mt-4 font-semibold">Seller: {selectedItem.profiles?.name}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

function ShoppingBag({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}