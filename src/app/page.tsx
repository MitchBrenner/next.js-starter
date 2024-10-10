import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  // // const full = `${first} ${last}`;

  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardHeader>
        <CardTitle className="text-3xl">Next.js Starter</CardTitle>
        <CardDescription>A simple next.js starter</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Utilizes next.js, typescript, tailwind, shadcn</p>
      </CardContent>
    </Card>
  );
}
