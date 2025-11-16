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
import { Plus, ThumbsUp, MessageSquare } from 'lucide-react';

interface Question {
  id: string;
  title: string;
  description: string;
  tags: string[];
  votes: number;
  user_id: string;
  created_at: string;
  profiles: {
    name: string;
  };
  answers: { count: number }[];
}

interface Answer {
  id: string;
  content: string;
  votes: number;
  created_at: string;
  profiles: {
    name: string;
  };
}

export default function QnA() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [createOpen, setCreateOpen] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    loadQuestions();
  }, []);

  useEffect(() => {
    if (selectedQuestion) {
      loadAnswers(selectedQuestion);
    }
  }, [selectedQuestion]);

  const loadQuestions = async () => {
    const { data } = await supabase
      .from('questions')
      .select('*, profiles(name), answers(count)')
      .order('created_at', { ascending: false });
    
    if (data) {
      setQuestions(data);
    }
  };

  const loadAnswers = async (questionId: string) => {
    const { data } = await supabase
      .from('answers')
      .select('*, profiles(name)')
      .eq('question_id', questionId)
      .order('created_at', { ascending: false });
    
    if (data) {
      setAnswers(data);
    }
  };

  const handleCreateQuestion = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const tags = (formData.get('tags') as string).split(',').map(t => t.trim());
    
    const { error } = await supabase
      .from('questions')
      .insert({
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        tags,
        user_id: user!.id
      });

    if (error) {
      toast({ variant: "destructive", title: "Error", description: error.message });
    } else {
      toast({ title: "Success", description: "Question posted successfully!" });
      setCreateOpen(false);
      loadQuestions();
    }
  };

  const handleAddAnswer = async (questionId: string, content: string) => {
    const { error } = await supabase
      .from('answers')
      .insert({
        question_id: questionId,
        content,
        user_id: user!.id
      });

    if (error) {
      toast({ variant: "destructive", title: "Error", description: error.message });
    } else {
      toast({ title: "Success", description: "Answer posted!" });
      loadAnswers(questionId);
    }
  };

  const currentQuestion = questions.find(q => q.id === selectedQuestion);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Q&A</h1>
          <p className="text-muted-foreground">Ask questions and help others</p>
        </div>
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="mr-2 h-4 w-4" /> Ask Question</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Ask a Question</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateQuestion} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" required />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" required />
              </div>
              <div>
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input id="tags" name="tags" placeholder="programming, python, help" />
              </div>
              <Button type="submit" className="w-full">Post Question</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {questions.map((question) => (
          <Card 
            key={question.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedQuestion(question.id)}
          >
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">{question.title}</h3>
              <p className="text-muted-foreground line-clamp-2 mb-4">{question.description}</p>
              <div className="flex gap-2 mb-4">
                {question.tags?.map(tag => (
                  <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" /> {question.votes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" /> {question.answers?.[0]?.count || 0} answers
                </span>
                <span>by {question.profiles?.name}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedQuestion && currentQuestion && (
        <Dialog open={!!selectedQuestion} onOpenChange={() => setSelectedQuestion(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{currentQuestion.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div>
                <p className="mb-4">{currentQuestion.description}</p>
                <div className="flex gap-2 mb-4">
                  {currentQuestion.tags?.map(tag => (
                    <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Asked by {currentQuestion.profiles?.name}</p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold mb-4">{answers.length} Answers</h3>
                <div className="space-y-4">
                  {answers.map(answer => (
                    <Card key={answer.id}>
                      <CardContent className="p-4">
                        <p className="mb-2">{answer.content}</p>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" /> {answer.votes}
                          </span>
                          <span>by {answer.profiles?.name}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold mb-2">Your Answer</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const content = (e.currentTarget.elements.namedItem('answer') as HTMLTextAreaElement).value;
                  handleAddAnswer(selectedQuestion, content);
                  e.currentTarget.reset();
                }}>
                  <Textarea name="answer" placeholder="Write your answer..." required className="mb-2" />
                  <Button type="submit">Post Answer</Button>
                </form>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}