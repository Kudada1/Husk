export interface DropdownProps {
  options: { label: string; value: string }[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}
