import MenuItemCard from "./MenuItemCard";

const MenuList = ({ menu, setShowCheckout }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {menu.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          setShowCheckout={setShowCheckout}
        />
      ))}
    </div>
  );
};

export default MenuList;
