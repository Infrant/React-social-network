import style from './FormControl.module.scss';

export const FormControl = ({ input, meta, TypeField, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={style.formControl}>
      <div>
        <TypeField
          {...input}
          {...props}
          className={hasError ? style.error : ''}
        />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

// export const Textarea = props => {
//   return <FormControl {...props} />;
// };

// export const Input = props => {
//   return <FormControl {...props} />;
// };

// export const Textarea = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={style.formControl}>
//       <div>
//         <textarea {...input} {...props} className={hasError && style.error} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   );
// };

// export const Input = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={style.formControl}>
//       <div>
//         <input {...input} {...props} className={hasError && style.error} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   );
// };
