import {memo} from "react";
import PropTypes from "prop-types";
import {cn as bem} from '@bem-react/classname';
import './style.css';
import Basket from "../../app/basket";
import useSelector from "../../store/use-selector";

function PageLayout({head, footer, children}) {

  const cn = bem('PageLayout');

  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
      <div className={cn()}>
        <div className={cn('head')}>
          {head}
        </div>
        <div className={cn('center')}>
          {children}
        </div>
        <div className={cn('footer')}>
          {footer}
        </div>
      </div>
      {activeModal === 'basket' && <Basket/>}
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node
}

export default memo(PageLayout);
