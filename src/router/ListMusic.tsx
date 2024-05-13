import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
function ListMusic() {
  return (
    <div>
      <p>Muốn được cùng em beat</p>
      <p>Quá lâu</p>
      <p>Dương đẹp trai</p>
      <p>Khánh tay to</p>
      <div className=" m-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gray-200" variant="outline">
              Edit Profile
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white rounded-xl">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value="Huỳnh Minh Thạo"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  value="huynhminhthao"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default ListMusic;
