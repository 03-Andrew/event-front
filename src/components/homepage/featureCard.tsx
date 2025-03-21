import { ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 shadow-sm flex flex-col justify-between border border-[var(--border)]">
      <CardHeader className="flex flex-col items-center space-y-2">
        {icon}
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}