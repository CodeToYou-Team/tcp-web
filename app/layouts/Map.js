import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function Map() {
  return (
    <>
      <Card className="bg-zinc-800 m-8 text-zinc-100">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h2 className="title-font font-bold text- text-xs">DIRECCIÓN</h2>
          <p className="mt-1 break-words ">
            Edificio Keope, Avenida La Guairita, Caracas 1080, Miranda
          </p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3923.262179399375!2d-66.8596808!3d10.4799863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59941ef561e3%3A0x35ac16d11c66514d!2sTucarropropio!5e0!3m2!1ses!2sve!4v1702341938443!5m2!1ses!2sve"
            title="map"
            className="w-full rounded-lg"
            height={400}
            loading="lazy"
            frameborder="0"
          ></iframe>
        </CardBody>
        <CardFooter>
          <div className="lg:w-1/2 pt-4 lg:mt-0">
            <h2 className="title-font font-bold   text-xs">EMAIL</h2>
            <p className=" leading-relaxed">tucarropropiove@gmail.com</p>
            <h2 className="title-font font-bold   text-xs mt-4">TELÉFONOS</h2>
            <p className="leading-relaxed">+58 424-1504459</p>
          </div>
        </CardFooter>
      </Card>
      <div className="w-full h-full">
        <div>
          <div className="lg:w-1/2 pl-4 text-sm pr-12 py-4"></div>
        </div>
      </div>
    </>
  );
}
