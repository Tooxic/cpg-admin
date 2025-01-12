import { 
    ArrayInput,
    BooleanInput,
    Create, DateInput, Edit, FormTab,
    NumberInput,
    ReferenceArrayInput, ReferenceInput, SelectArrayInput, SelectInput,
    SimpleFormIterator,
    TabbedForm,
    TextInput,
} from "react-admin";

export const EditOrders = (props: any) =>
(
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="General">
                <ReferenceInput source="customer_uid" reference="customers">
                        <SelectInput
                            source="customers"
                            label="Customers"
                            required={true}
                            allowEmpty={false}
                            optionText={
                                (record: { personal: {first_name: any; last_name: any;} }) => 
                                `${record.personal.first_name} ${record.personal.last_name}`}
                        />
                </ReferenceInput>
                <ArrayInput source="products">
                    <SimpleFormIterator>
                            <ReferenceInput source="product_id" reference="products">
                                <SelectInput
                                    source="products"
                                    label="Products"
                                    required={true}
                                    allowEmpty={false}
                                    optionText="name"
                                />
                        </ReferenceInput>
                        <NumberInput label="Quantity" defaultValue={1} source="quantity" />
                    </SimpleFormIterator>
                </ArrayInput>
                <SelectInput required={true} source="order_status" choices={[
                    { id: "active", name: "active" },
                    { id: "pending", name: "pending" },
                    { id: "fruad", name: "fruad" },
                    { id: "cancelled", name: "cancelled" },
                ]} />
                <NumberInput min={0} required={false} label="Price override" source="price_override" />
            </FormTab>
            <FormTab label="Payments">
                <NumberInput min={0} required={true} defaultValue={1} label="Quantity" source="quantity" />
                <SelectInput required={true} source="payment_method" choices={[
                    { id: "none", name: "none" },
                    { id: "manual", name: "manual" },
                    { id: "bank", name: "bank" },
                    { id: "paypal", name: "paypal" },
                    { id: "credit_card", name: "credit_card" },
                    { id: "swish", name: "swish" },
                ]} />
                <SelectInput required={true} source="billing_type" choices={[
                    { id: "free", name: "free" },
                    { id: "one_time", name: "one_time" },
                    { id: "recurring", name: "recurring" },
                ]} />
                <SelectInput required={false} source="billing_cycle" choices={[
                    { id: "monthly", name: "monthly" },
                    { id: "quarterly", name: "quarterly" },
                    { id: "semi_annually", name: "semi_annually" },
                    { id: "yearly", name: "yearly" },
                    { id: "biennially", name: "biennially" },
                    { id: "triennially", name: "triennially" },
                ]} />
            </FormTab>
            <FormTab label="Invoices">

            <ReferenceArrayInput source="invoices" reference="invoices">
                    <SelectArrayInput optionText="uid" />
            </ReferenceArrayInput>

            </FormTab>
        </TabbedForm>
    </Edit>
);