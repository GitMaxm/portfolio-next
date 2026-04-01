import PriceTable from "@/components/PriceTable";
import ModalForm from "@/components/ModalForm";

const Price = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Услуги и цены</h1>

                <PriceTable />
                <ModalForm />

            </div>
        </main>
    );
}

export default Price;