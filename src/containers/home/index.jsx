import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// style
import { Container, Wrapper, Title, Desc } from "./home.styles";
// component
import { ButtonPrimary, ButtonSecondary } from "@/src/components";

export default function Home() {
  const router = useRouter();

  const onNavigateTo = (url) => {
    router.push(`${url}`);
  };

  return (
    <Container>
      <Wrapper>
        <div className="wrapper-content">
          <Title>
            Sate Kreasi Anak Muda!
            <br /> Sate Taichan Madura Gaes!
          </Title>
          <Desc>
            Sate Taichan merupakan salah satu jenis sate populer di kalangan
            anak muda Indonesia.
            <br /> Tahukah kamu sate taichan ini ternyata bukan asli Jepang,
            China, maupun Korea Selatan, lho.
            <br /> Sate ini merupakan kreasi dari sate madura.
          </Desc>
        </div>
        <div className="button-container">
          <ButtonPrimary onClick={() => onNavigateTo("/products")}>
            Products
          </ButtonPrimary>
          <ButtonSecondary
            style="secondary"
            onClick={() => onNavigateTo("/about")}
          >
            About
          </ButtonSecondary>
        </div>
      </Wrapper>
      <Image src="/imgs/sate-erik-bg.png" alt="test" width={380} height={380} />
    </Container>
  );
}
