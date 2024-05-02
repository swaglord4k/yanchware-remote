import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { Select } from "./icon-select";
import { IconButton } from "./icon-button";

export type PaginationProps = {
  total: number;
  pageSize: number;
  page: number;
  onNextClicked?: () => void;
  onPreviousClicked?: () => void;
  onPageClicked?: (page: number) => void;
  onSizeChange?: (size: number) => void;
};

const FIRST_PAGE = 1;

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
    <div className=" bg-white sticky bottom-0 flex flex-row flex-wrap items-center h-10 w-full">
      <Select
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
      </Select>
      <IconButton
        disabled={page === FIRST_PAGE}
        className="ml-auto"
        onClick={() => onPreviousClicked?.()}
      >
        <MdOutlineKeyboardArrowLeft
          className={page === FIRST_PAGE ? "fill-gray-300" : ""}
        />
      </IconButton>
      <Select
        value={page}
        disabled={pages === 1}
        onChange={(event) =>
          onPageClicked?.(Number(event.target.value) || FIRST_PAGE)
        }
      >
        {pagesOptions.map((pageOption) => (
          <option key={pageOption} value={pageOption}>
            {pageOption}
          </option>
        ))}
      </Select>
      <IconButton disabled={page === pages} onClick={() => onNextClicked?.()}>
        <MdOutlineKeyboardArrowRight
          className={page === pages ? "fill-gray-300" : ""}
        />
      </IconButton>
    </div>
  );
};
