import { Modal, ModalInstance } from "iview";

const beforeClose = {
  before_close_normal: resolve => {
    ((Modal as unknown) as ModalInstance).confirm({
      title: "确定要关闭这一页吗",
      onOk: () => {
        resolve(true);
      },
      onCancel: () => {
        resolve(false);
      }
    });
  }
};

export default beforeClose;
