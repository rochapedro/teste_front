import Link from 'next/link';
import P from 'prop-types';
import { useState } from 'react';
import { DropdownContainer, DropdownContent, DropdowButton } from './styles';

export default function Dropdown(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <DropdownContainer>
      <DropdowButton
        onClick={() => handleShow()}
        width={props.width}
        height={props.height}
        borderRadius={props.borderRadius}
      >
        {props.icon}
      </DropdowButton>
      <DropdownContent show={show} contentMarginTop={props.contentMarginTop}>
        {props.itens.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Link href={item.link}>
              <a key={item.text} href="">
                {item.text}
              </a>
            </Link>
          );
        })}
      </DropdownContent>
    </DropdownContainer>
  );
}

Dropdown.propTypes = {
  width: P.string,
  height: P.string,
  borderRadius: P.string,
  contentMarginTop: P.string,
  icon: P.node,
  text: P.string,
  itens: P.array.isRequired,
};
