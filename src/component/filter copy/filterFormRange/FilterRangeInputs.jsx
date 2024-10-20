export function FilterRangeInputs({
  handleMin,
  handleMax,
  minValue,
  maxValue,
  min,
  max,
}) {
  return (
    <div className="range-input relative">
      <input
        onChange={handleMin}
        type="range"
        min={min}
        max={max}
        step='0.01'
        value={minValue}
        name="rangeMin"
        className="range-min pointer-events-none absolute -top-1 end-0 start-0 h-1 w-[341px] translate-y-0 transform appearance-none bg-transparent tab:w-[688px]  lap:-left-[1px] lap:w-[283px]"
      />
      <input
        onChange={handleMax}
        type="range"
        min={min}
        max={max}
        step='0.01'
        value={maxValue}
        name="rangeMax"
        className="range-max pointer-events-none absolute -top-1 end-0 start-0 h-1 w-[341px] translate-y-0 transform appearance-none bg-transparent tab:w-[688px] lap:-right-[2px] lap:w-[283px]"
      />

    </div>
  );
}
