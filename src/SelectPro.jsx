import React, {useContext, useState} from "react";
import Context from './context';
const Pro = props => {
  const { pro, onCheck } = props;
  const [checked, setChecked] = useState(false);
  return (
      <div onClick={() => {
          setChecked(x => !x);
          onCheck(pro)
      }}>
          {checked && <span>选中</span>}
          { pro.id }
      </div>
  )
};
export default () => {
    const { pros } = useContext(Context);
    const onCheck = p => p.checked = true;
    return (
        <div>
            { pros.map(p => (
                <Pro pro={p} onCheck={onCheck} key={p.id} />
            )) }
        </div>
    )
}
