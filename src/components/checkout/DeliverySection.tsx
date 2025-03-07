import { FC, useState } from "react";
import { Box, Text, Select } from "@mantine/core";

interface DeliverySectionProps {
  isLoading: boolean;
}

const DeliverySection: FC<DeliverySectionProps> = ({ isLoading }) => {
  const [deliveryOption, setDeliveryOption] = useState(0);

  return (
    <Box className={`${isLoading ? "bg-gray-100 opacity-50 pointer-events-none" : "bg-white"} p-6 rounded-3xl checkout-block-shadow`}>
      <Text className="text-xl font-bold mb-4">Способ доставки</Text>
      <Select
        label="Выберите способ доставки"
        placeholder="Выберите значение"
        data={["Доставка курьером", "Самовывоз"]}
        value={deliveryOption.toString()}
        onChange={(value) => setDeliveryOption(Number(value))}
      />
    </Box>
  );
};

export default DeliverySection;