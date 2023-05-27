import styled from "styled-components";
import { MdOutlineFoodBank, MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  /* color: ${(props) => props.theme.colors.bgRedPrimary}; */
`;

export const IconSate = styled(MdOutlineFoodBank)`
  font-size: 40px;
`;

export const IconMinuman = styled(MdOutlineEmojiFoodBeverage)`
  font-size: 40px;
`;

export const IconPaket = styled(IoFastFoodOutline)`
  font-size: 40px;
`;
