'use client';
import Dropdown from 'app/components/dropdown/Dropdown';
import { useSelector } from 'react-redux';
import { selectItems } from '../../Redux/cartSlice';

import tw from 'tailwind-styled-components';

const Form = tw.form`
  p-4 bg-gray-100 rounded-lg
`;

const InputGroup = tw.div`
  flex flex-col mb-4
`;

const InputGroup2 = tw.div`
  flex flex-row mb-4 justify-between
`;

const Label = tw.label`
  mb-2 font-medium text-gray-700
`;

const Input = tw.input`
  px-3 py-2 text-base border border-gray-300 rounded-lg leading-8 text-gray-700 transition-colors duration-300 bg-white outline-none focus:border-amazon_orange focus:ring-2 focus:ring-amazon_orange
`;

const LeftInput = tw.input`
  px-3 py-2 flex-1 text-base border border-gray-300 rounded-lg leading-8 text-gray-700 transition-colors duration-300 bg-white outline-none focus:border-amazon_orange focus:ring-2 focus:ring-amazon_orange
`;

const RightInput = tw.input`
  px-3 py-2 text-base border border-gray-300 rounded-lg leading-8 text-gray-700 transition-colors duration-300 bg-white outline-none focus:border-amazon_orange focus:ring-2 focus:ring-amazon_orange
`;

const SmallInput1 = tw.input`
  px-3 py-2 text-base border border-gray-300 rounded-lg leading-8 text-gray-700 transition-colors duration-300 bg-white outline-none focus:border-amazon_orange focus:ring-2 focus:ring-amazon_orange
`;
const SmallInput2 = tw.input`
  px-3 py-2 text-base border border-gray-300 rounded-lg leading-8 text-gray-700 transition-colors duration-300 bg-white outline-none focus:border-amazon_orange focus:ring-2 focus:ring-amazon_orange
`;
const SmallInput3 = tw.input`
  px-3 py-2 text-base border border-gray-300 rounded-lg leading-8 text-gray-700 transition-colors duration-300 bg-white outline-none focus:border-amazon_orange focus:ring-2 focus:ring-amazon_orange
`;

const CartCard = tw.div`
  flex flex-row items-center mb-4
  p-4 bg-white rounded-lg shadow-md
`;

const CardImage = tw.img`
 w-24 h-24 object-contain rounded-lg mr-4
`;

const CardInfo = tw.div`
  flex-1
`;

const CardName = tw.h3`
  text-lg font-semibold text-gray-700 mb-2
`;

const CardCategory = tw.p`
  text-sm font-medium text-gray-500 mb-2
`;

const CardTotal = tw.p`
  text-lg font-medium text-gray-700 mb-2
`;

const CardQuantity = tw.p`
  text-sm font-medium text-gray-500
`;

const BlueLine = tw.div`
  w-px h-full bg-amazon_orange
`;
const Line = tw.div`
  w-full h-px bg-gray-700
`;
function Checkout() {
  const items = useSelector(selectItems);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="container flex px-5 py-12 mx-auto bg-black">
        <div className="flex-1 overflow-auto">
          <ul className="p-4 bg-red-400 rounded-lg">
            <Dropdown title="Delivery Address">
              <div className="p-4 bg-gray-100 rounded-lg ">
                <InputGroup2>
                  <InputGroup>
                    <Label htmlFor="name">First Name</Label>
                    <LeftInput type="text" id="name" name="name" required />
                  </InputGroup>

                  <InputGroup>
                    <Label htmlFor="name">Last Name</Label>
                    <LeftInput type="text" id="name" name="name" required />
                  </InputGroup>
                </InputGroup2>
                <InputGroup>
                  <Label htmlFor="address">Address</Label>
                  <Input type="text" id="address" name="address" required />
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="city">City</Label>
                  <Input type="text" id="city" name="city" required />
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="state">State</Label>
                  <Input type="text" id="state" name="state" required />
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input type="text" id="zip" name="zip" required />
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="country">Country</Label>
                  <Input type="text" id="country" name="country" required />
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input type="tel" id="phone" name="phone" required />
                </InputGroup>
              </div>
            </Dropdown>
            <Line />
            <Dropdown title="Payment method" opened={true}>
              <div className="p-4 bg-gray-100 rounded-lg ">
                <InputGroup2>
                  <InputGroup>
                    <Label htmlFor="name">First Name</Label>
                    <LeftInput type="text" id="name" name="name" required />
                  </InputGroup>

                  <InputGroup>
                    <Label htmlFor="name">Last Name</Label>
                    <LeftInput type="text" id="name" name="name" required />
                  </InputGroup>
                </InputGroup2>
                <InputGroup>
                  <Label htmlFor="address">Address</Label>
                  <Input type="text" id="address" name="address" required />
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="city">City</Label>
                  <Input type="text" id="city" name="city" required />
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="state">State</Label>
                  <Input type="text" id="state" name="state" required />
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input type="text" id="zip" name="zip" required />
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="country">Country</Label>
                  <Input type="text" id="country" name="country" required />
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input type="tel" id="phone" name="phone" required />
                </InputGroup>
              </div>
            </Dropdown>
            <Line />
            <Dropdown title="Offers">
              <div>Hello I am under water</div>
            </Dropdown>
            <Line />
            <Dropdown title="Review items and delivery" opened={true}>
              <div className="p-3 border border-gray-300 rounded-lg ">
                {items.map((item, i) => (
                  <CartCard key={i}>
                    <CardImage src={item.image} alt="Product" />
                    <CardInfo>
                      <CardName>{item.title}</CardName>
                      <CardCategory>{item.category}</CardCategory>
                      <CardTotal>{item.price}</CardTotal>
                      <CardQuantity>Quantity: {item.quantity}</CardQuantity>
                    </CardInfo>
                  </CartCard>
                ))}
              </div>
            </Dropdown>
          </ul>
        </div>
        <div className="sticky p-5 ml-5 overflow-auto border border-gray-300 rounded-lg top-6 h-96 flex-1/3">
          {items.map((item, i) => (
            <CartCard key={i}>
              <CardImage src={item.image} alt="Product" />
              <CardInfo>
                <CardName>{item.title}</CardName>
                <CardCategory>{item.category}</CardCategory>
                <CardTotal>{item.price}</CardTotal>
                <CardQuantity>Quantity: {item.quantity}</CardQuantity>
              </CardInfo>
            </CartCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
