import { montserratMedium500 } from '@/public/fonts';
export function FilterDigitalValuesRange({
  setMinValue,
  setMaxValue,
  minValue,
  maxValue,
  min,
  max
})

{
  return (
    <div className="flex items-center font-medium">
      <input
        onChange={e => {
          const value = e.target.value;
            if (!isNaN(value) || value >= min || value <= max) {
            setMinValue(value)
          }
          else{minValue}
        }}
        type="number"
        value={minValue}
        step="0.01"
        name="valueMin"
        className="valueMin mr-2 flex h-[40px] w-[95px] justify-center rounded-lg border border-accent-500 bg-transparent text-center text-base  font-normal outline-none focus:border-accent-500 tab:w-[268px] lap:w-[68px]"
      />

      <span
        className={[
          montserratMedium500.className,
          'items-center justify-center text-accent-100',
        ].join(' ')}
      >
        –
      </span>

      <input
        onChange={e => {
          const value = e.target.value;
            if (parseFloat(value) > min || parseFloat(value) < max) {
            setMaxValue(value);
          }  else{maxValue}
        }}
        type="number"
        value={maxValue}
        step="0.01"
        name="valueMax"
        className="valueMax ml-2 flex h-[40px] w-[95px] justify-center rounded-lg border border-accent-500 bg-transparent text-center text-base font-normal outline-none focus:border-accent-500 tab:w-[268px] lap:w-[68px]"
      />
      <span className="ml-1 font-semibold"> zł </span>
    </div>
  );
}
