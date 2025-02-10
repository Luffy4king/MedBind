import ComponentHeader from "@/components/componentHeader/ComponentHeader";
import MoleculeBankTable from "@/components/MoleculeBank/MoleculeBankTable";

import DefaultLayout from "@/components/layout/DefaultLayout";
const Page = () => {
  return (
    <DefaultLayout>
      <ComponentHeader pageName="Molecule Bank" containActionButton={true} />
      <div className="flex flex-col gap-10">
        <MoleculeBankTable />
      </div>
    </DefaultLayout>
  );
};

export default Page;