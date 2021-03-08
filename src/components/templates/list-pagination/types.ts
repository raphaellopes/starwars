export interface ListPaginationProps {
  loading: boolean;
  data: any[];
  title: string;
  cardKeyPrefix: string;
  disablePrev: boolean;
  disableNext: boolean;
  onClickPrev: () => void;
  onClickNext: () => void;
}
