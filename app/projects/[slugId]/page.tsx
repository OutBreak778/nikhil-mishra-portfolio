import React from "react";

interface PageProps {
  params: {
    slugId: string; 
  };
}

const Page = async ({ params }: PageProps) => {
  // params.slugId is already a string, no need to await
  const slug = params.slugId;

  return <div>This is the Project Page - {slug}</div>;
};

export default Page;
