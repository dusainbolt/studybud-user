import { Button } from '@common/Button';
import { DialogModal } from '@common/Dialog/DialogModal';
import FieldText, { ValidateBlock } from '@common/Form/FieldInput';
import FieldRadioBox from '@common/Form/FieldRadioBox';
import FieldSelect from '@common/Form/FieldSelect';
import { DialogActions } from '@mui/material';
import { defaultStyle } from '@styles/theme';
import { Restrict } from '@type/field';
import { Gender } from '@type/user';
import { provinces } from '@utils/provinces';
import { Field, useFormikContext } from 'formik';
import { FC } from 'react';

// interface ModalBasicInfoProps {}

export const GenderOptions = [
  {
    label: 'Nam',
    value: Gender.MALE,
  },
  {
    label: 'Nữ',
    value: Gender.FEMALE,
  },
];

export const ModalBasicInfo: FC<{
  open: boolean;
  toggleModal: any;
  loading: boolean;
}> = ({ open, toggleModal, loading }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <DialogModal
      onCloseModal={loading ? false : toggleModal}
      width={700}
      id="modal-basic-info"
      open={open}
      title="THÔNG TIN CÁ NHÂN"
      action={
        <DialogActions>
          <Button
            autoFocus
            variant="contained"
            loading={loading}
            onClick={handleSubmit as any}
            sx={{
              ...defaultStyle.btnStyle('#000000'),
            }}
          >
            Hoàn tất
          </Button>
        </DialogActions>
      }
      content={
        <div>
          <Field
            name="school"
            component={FieldText}
            label="Học tại"
            block={
              {
                restric: Restrict.DISALLOW_SPECIAL_CHAR,
              } as ValidateBlock
            }
          />
          <Field
            name="address"
            component={FieldSelect}
            options={provinces.map((item) => ({ value: item.name, label: item.name }))}
            label="Đến từ"
          />
          <Field name="gender" component={FieldRadioBox} options={GenderOptions} label="Giới tính (bắt buộc)" />
          <Field
            name="contact"
            fieldProps={{ placeholder: 'URL mạng xã hội, email' }}
            component={FieldText}
            label="Thông tin liên lạc"
          />
        </div>
      }
    />
  );
};
