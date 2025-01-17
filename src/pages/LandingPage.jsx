import logoGamba from "../assets/logo/logoGamba_logoBlanco.svg";
import shape1 from "../assets/shapes/shape1.svg";
import shape2 from "../assets/shapes/shape2.svg";
import landing1 from "../assets/illustrations/landing1.svg";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function LandingPage() {

  return (
    <div
      className="overflow-hidden relative text-white bg-primary h-full flex flex-col justify-between items-center"
    >
      <header className="relative z-10 max-w-screen-2xl w-full mx-auto flex py-4 px-2 items-center justify-between">
        {/*Logo*/}
        <img className="w-32 md:w-44" src={logoGamba} alt="Gamba Logo" />
        {/*Log in*/}
        <Button className="bg-[#272D2F] shadow-lg font-semibold md:w-28 md:h-12">
          <Link className="text-[#FAFAFA] text-lg" to={"/login"}>
            Log in
          </Link>
        </Button>
      </header>

      <main className="relative z-10 flex flex-col mx-auto items-center justify-around md:grid md:grid-cols-2 md:gap-20 md:w-10/12 md:content-between max-w-screen-2xl">

        {/*Ilustración mobile*/}
        <img
          src={landing1}
          className="w-full h-96 md:h-auto md:w-1/2 md:hidden"
          alt="landing1"
        />

        {/*Texto*/}
        <div className="flex flex-col md:gap-8">
          <div className="text-center md:text-left ">
            {/*Título texto*/}
            <h1 className="text-4xl font-extrabold leading-none tracking-tight my-4  md:text-6xl">
              Encuentra tus <br /> mejores recetas
            </h1>
            {/*Párrafo texto*/}
            <p className="hidden md:block md:text-2xl">
            Explora y disfruta de las recetas exclusivas de los restaurantes locales en nuestra plataforma. Desde platos clásicos hasta creaciones innovadoras, descubre la diversidad culinaria de tu comunidad y recrea tus favoritos en casa. Únete a una comunidad apasionada por la buena comida y comparte tus propias creaciones culinarias
            </p>
          </div>
          {/*Botón regístrate*/}
          <Button className="bg-[#272D2F] shadow-lg font-semibold h-12 md:w-48">
            <Link className="text-[#FAFAFA] text-lg" to={"/register"}>
              Regístrate
            </Link>
          </Button>
        </div>

        {/*Ilustración Desktop*/}
        <article className="hidden w-full justify-center md:flex">
          <img
            src={landing1}
            className="hidden md:block md:h-auto md:max-h-[35rem]"
            alt="landing1"
          />
        </article>

      </main>

      <footer className="h-[10dvh]"></footer>

      {/* Mancha arriba derecha */}
      <article
        className={`absolute z-0 top-[-17rem] rotate-[100deg] right-[-14rem] md:top-[-12rem] md:right-[2rem]`}
      >
        <img src={shape1} className="max-w-[30rem] w-[50rem]" alt="" />
      </article>

      {/* Mancha abajo derecha */}
      <article
        className={`absolute z-0 rotate-[-20deg] bottom-[-36rem] right-[-26rem] md:right-[-16rem] md:bottom-[-16rem]`}
      >
        <img
          src={shape2}
          className="max-w-[50rem] w-[50rem] md:max-w-[46rem]"
          alt=""
        />
      </article>
      {/* Mancha abajo izquierda */}
      <article
        className={`absolute hidden z-0 rotate-[200deg] bottom-[-30rem] left-[-18rem] md:block md:bottom-[-20rem] md:left-[-12rem]`}
      >
        <img
          src={shape2}
          className="max-w-[50rem] w-[50rem] md:max-w-[46rem]"
          alt=""
        />
      </article>
    </div>
  );
}
