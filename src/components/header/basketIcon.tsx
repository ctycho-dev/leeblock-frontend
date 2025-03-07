import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../../features/bugsSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import IconButton from '@mui/material/IconButton';



const BasketIcon = () => {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <Badge badgeContent={totalQuantity} color="success">
      <IconButton>
        <ShoppingCartIcon fontSize="medium" className="dark:text-white" />
      </IconButton>
    </Badge>
  );
};

export default BasketIcon;