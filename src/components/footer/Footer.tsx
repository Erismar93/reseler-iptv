import { PropsWithChildren } from "react";
import { BsArrowRight } from "react-icons/bs";
import { createGenerateLinkWhats } from "../../helpers/generateLinkWhats";


export const Footer = () => {
  const year = new Date().getFullYear();
  const generateLinkWhats = createGenerateLinkWhats("5584996760901")

  return (
    <footer className="w-full flex flex-col p-8 space-y-4">
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Li title="Links Úteis">
          <ul>
            <li>
              <a href={generateLinkWhats("Ola, Gostaria de conhecer mais sobre a assinatura de IPTV.")} rel="noreferrer" target="_blank" className="flex items-center space-x-2 hover:text-gray-900">
                <div>Quero Assinar</div> <BsArrowRight />
              </a>
            </li>
            <li>
              <a href={generateLinkWhats("Ola, Gostaria de saber mais sobre a revenda de IPTV.")} rel="noreferrer" target="_blank" className="flex items-center space-x-2 hover:text-gray-900">
                <div>Quero Revender</div> <BsArrowRight />
              </a>

            </li>
          </ul>
        </Li>
        <Li title="Formas de Pagamento">
          <ul>
            <li>
              <span>Pix</span>
            </li>
            <li>
              <span>Transferência</span>
            </li>
          </ul>
        </Li>
        <Li title="Compra Segura">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-40"
            src="https://eletricista-em-es.com.br/wordpress/wp-content/uploads/site-seguro-google.png"
            alt="Site seguro"
          />
        </Li>
      </ul>
      <div className="text-gray-500 flex justify-center w-full border-t pt-4">
        <span>{year} - Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

type LiProps = PropsWithChildren<{
  title: string;
}>;

const Li = (props: LiProps) => {
  const { title, children } = props;
  return (
    <li className="flex lg:justify-center text-gray-600">
      <div>
        <strong>{title}</strong>

        <div className="py-2">{children}</div>
      </div>
    </li>
  );
};


