import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface imageCardProps {
  title: string;
  description: string;
  image: string;
  content?: string;
}
function ImageCard(props: imageCardProps) {
  const { title, description, image, content } = props;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <img src={image} alt="card img" className="h-3/4" />
          <p>{content}</p>
        </div>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

export default ImageCard;
