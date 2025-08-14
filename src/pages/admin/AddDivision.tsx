import { AddDivisionModal } from "@/components/modules/admin/division/AddDivisionModal";

 
export default function AddDivision() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-medium text-xl">Division</h2>
        <AddDivisionModal />
      </div>
    </div>
  );
}