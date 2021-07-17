import React from 'react';
import { Pagination, Table, Empty } from 'antd';
import { useTranslation } from 'react-i18next';

function TableCommon({
  columns = [],
  dataSource = [],
  current = 0,
  pageSize = 0,
  total = 0,
  rowClassName = 0,
  pageSizeOptions = [],
  onChangeTable,
  onChangePagination,
  size,
  enablePagination = true,
  ...props
}) {
  const { t } = useTranslation();
  return (
    <div className="table">
      <Table
        className="table__table"
        locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={t('common.noData')} /> }}
        pagination={false}
        columns={columns}
        bordered
        rowClassName={rowClassName}
        dataSource={dataSource}
        onChange={onChangeTable}
        rowKey={record => record._id}
        showSorterTooltip={false}
        {...props}
      />
      {enablePagination && (
        <div className="my-pagination">
          <Pagination
            size="small"
            total={total ? total : 1}
            current={current}
            pageSize={pageSize}
            onChange={onChangePagination}
            locale={{ items_per_page: `/ ${t('table.text_page_size')}` }}
            showSizeChanger
          />
        </div>
      )}
    </div>
  );
}

export default TableCommon;
