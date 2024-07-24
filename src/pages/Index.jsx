import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Home, Settings, User } from 'lucide-react';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">My Application</h1>
        <nav className="mt-4">
          <Button variant="ghost" className="mr-2">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button variant="ghost" className="mr-2">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button variant="ghost">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>
      </header>

      <main>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>This is a bare-bones application you can build upon.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Start by modifying this component or adding new ones.</p>
            <Input placeholder="Enter some text" className="mb-4" />
            <Button>Click me</Button>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">Footer content goes here</p>
          </CardFooter>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is the content for Card 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is the content for Card 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is the new card you requested.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;