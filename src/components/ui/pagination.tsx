import { useState } from "react";

export type PaginationProps = {
  total: number;
  pageSize: number;
  page: number;
  onNextClicked?: () => void;
  onPreviousClicked?: () => void;
  onPageClicked?: (page: number) => void;
  onSizeChange?: (size: number) => void;
};

export const Pagination = ({
  onNextClicked,
  onPreviousClicked,
  onPageClicked,
  onSizeChange,
  total,
  pageSize,
  page,
}: PaginationProps) => {
  const pages = Math.ceil(total / pageSize);
  const pageSizes = Array.from({ length: 5 }, (_, i) => (i + 1) * 20);
  const pagesOptions = Array.from({ length: pages }, (_, i) => i + 1);
  return (
    <div className="sticky bottom-0 flex flex-row flex-wrap items-center h-10 w-full">
      <select
        value={pageSize}
        onChange={(event) =>
          onSizeChange?.(Number(event.target.value) || pageSizes[0])
        }
      >
        {pageSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <button
        disabled={page === 0}
        className="ml-auto"
        onClick={() => onPreviousClicked?.()}
      >
        {"<"}
      </button>
      <select
        value={page + 1}
        onChange={(event) =>
          onPageClicked?.(Number(event.target.value) - 1 || 0)
        }
      >
        {pagesOptions.map((pageOption) => (
          <option key={pageOption} value={pageOption}>
            {pageOption}
          </option>
        ))}
      </select>
      <button disabled={page + 1 === pages} onClick={() => onNextClicked?.()}>
        {">"}
      </button>
    </div>
  );
};
