const inputBox = (props: { label: string; type: string }) => {
  return (
    <div className="inputForm">
      <input type={props.type} name="" id="" required={true} />
      <span>{props.label}</span>

      <i></i>
    </div>
  );
};
const inputDate = (props: { label: string; type: string }) => {
  return (
    <div className="inputForm">
      <span className="ipDate">{props.label}</span>
      <input type={props.type} name="" id="" required={true} />
      <i></i>
    </div>
  );
};
const Form = () => {
  return (
    <div className="formUsers">
      <div className="bg"></div>
      <form action="" method="post">
        <div className="row">
          {inputBox({
            label: "ID",
            type: "text",
          })}
          {inputBox({
            label: "FirstName",
            type: "text",
          })}
          {inputBox({
            label: "LastName",
            type: "text",
          })}
        </div>
        <div className="row">
          {inputBox({
            label: "Gender",
            type: "text",
          })}
          {inputDate({
            label: "Birthday",
            type: "date",
          })}
        </div>
        <div className="row">
          {inputBox({
            label: "province",
            type: "text",
          })}
          {inputBox({
            label: "city",
            type: "text",
          })}
          {inputBox({
            label: "address",
            type: "text",
          })}
        </div>
        <div className="row">
          {inputBox({
            label: "phone",
            type: "text",
          })}
          {inputBox({
            label: "Email",
            type: "email",
          })}
          {inputBox({
            label: "active",
            type: "text",
          })}
        </div>
        <div className="row">
          {inputDate({
            label: "create at",
            type: "date",
          })}
          {inputDate({
            label: "updated at",
            type: "date",
          })}
          {inputDate({
            label: "deleted at",
            type: "date",
          })}
        </div>
        <input type="submit" value="Submit" className="btnSubmit" />
      </form>
    </div>
  );
};
export default Form;