import { activeHashTagKeys, hashTagActiveTODO, hashTagCompletedTODO, hashTagFilterToggle } from 'actions/todoActions';
import { BadgePills } from 'components';
import { isEmpty } from 'lodash';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function HashTags() {
  const { hashTagKeys, active, completed, activeTagKey } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const filterHashTag = (_itemTag, e) => {
    dispatch(activeHashTagKeys({ ..._itemTag, active: true }));
    const _filterHashTagActive = active.filter((item) => {
      if (item?.todoText.includes(_itemTag.hashTag)) {
        return item;
      }
    });
    dispatch(hashTagActiveTODO(_filterHashTagActive));
    //
    const _filterHashTagCompleted = completed.filter((item) => {
      if (item?.todoText.includes(_itemTag.hashTag)) {
        return item;
      }
    });
    dispatch(hashTagCompletedTODO(_filterHashTagCompleted));
    dispatch(hashTagFilterToggle(true));
  };
  const hashTagItems = hashTagKeys.map((item) => {
    let activePillVariant = 'warning';
    if (activeTagKey.id === item.id) {
      activePillVariant = 'info';
    }
    return (
      <BadgePills
        text={item.hashTag}
        key={item.id}
        variant={activePillVariant}
        onClick={(e) => filterHashTag(item, e)}
      />
    );
  });
  return (
    !isEmpty(hashTagItems) && (
      <div style={{ background: '#f1d2fdc2' }} className="p-2 mb-3 rounded">
        {hashTagItems}
        {<BadgePills text="#reset" variant="danger" onClick={() => dispatch(hashTagFilterToggle(false))} />}
      </div>
    )
  );
}

export default HashTags;
