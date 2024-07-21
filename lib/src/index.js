import Toast from './components/toast/toast';
import './components/toast/toast.types';

const initialiseF11yToast = () => {
    if (typeof window !== 'undefined' && window.f11y !== 'undefined') {
        window.f11y.components.Toast = Toast;
    }
};

initialiseF11yToast();

export default Toast