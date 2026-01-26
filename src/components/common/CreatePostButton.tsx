import { useNavigate } from "react-router";
import { Button } from "../ui";

function CreatePostButton() {
  const navigate = useNavigate();
  return (
    <div className="fixed right-1/2 bottom-10 translate-x-1/2 z-20 items-center">
      <Button
        variant="destructive"
        className="px-6! py-5! rounded-full"
        onClick={() => navigate("/posts/create")}
      >
        게시물 작성
      </Button>
    </div>
  );
}

export { CreatePostButton };
