import { toast } from 'react-toastify';

export const notifySuccess = (msg) => {
    toast.success(msg);
}
export const notifyFailure = (msg) => {
    toast.error(msg);
}
export const notifyWarnning = (msg) => {
    toast.warning(msg);
}