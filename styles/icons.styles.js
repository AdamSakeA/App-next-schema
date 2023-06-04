import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineFoodBank, MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { IoFastFoodOutline, IoClose } from "react-icons/io5";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { TiPlus, TiMinus } from "react-icons/ti";

export const IconCart = styled(FiShoppingCart)`
  font-size: 18px;
  background-color: ${(props) => props.theme.colors.bgRedSecond};
  padding: 10px 15px;
  color: white;
  border-radius: 10px;
`;

export const IconSate = styled(MdOutlineFoodBank)`
  font-size: 24px;
`;

export const IconMinuman = styled(MdOutlineEmojiFoodBeverage)`
  font-size: 24px;
`;

export const IconPaket = styled(IoFastFoodOutline)`
  font-size: 24px;
`;

export const IconArrowCart = styled(FiArrowRight)`
  font-size: 40px;
  background-color: ${(props) => props.theme.colors.bgRedSecond};
  cursor: pointer;
  border-radius: 100%;
  color: white;
  padding: 5px;
`;

export const IconArrowCartLeft = styled(FiArrowLeft)`
  font-size: 40px;
  background-color: ${(props) => props.theme.colors.bgRedSecond};
  cursor: pointer;
  border-radius: 100%;
  color: white;
  padding: 5px;
`;

export const IconClose = styled(IoClose)`
  font-size: 40px;
  background-color: ${(props) => props.theme.colors.bgRedSecond};
  cursor: pointer;
  border-radius: 100%;
  color: white;
  padding: 5px;
  text-align: center;
`;

export const IconPlus = styled(TiPlus)`
  font-size: 20px;
  background-color: white;
  cursor: pointer;
  border-radius: 100%;
  padding: 5px;
  text-align: center;
  color: white;
  background-color: ${(props) => props.theme.colors.bgRedSecond};
`;

export const IconMin = styled(TiMinus)`
  font-size: 20px;
  background-color: white;
  cursor: pointer;
  border-radius: 100%;
  padding: 5px;
  text-align: center;
  color: white;
  background-color: ${(props) => props.theme.colors.bgRedSecond};
`;
