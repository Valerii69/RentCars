'use client';

import { useState } from 'react';
import { useUpdateQueryString } from '@/app/hooks';
import { montserratMedium500 } from '@/public/fonts';
import {
  FilterSliderProgress,
  FilterRangeInputs,
  FilterDigitalValuesRange,
} from '@/app/ui/components/filter/filterFormRange';
import { ButtonSubmit } from '@/app/ui/components/filter/filterFormRange/ButtonSubmit/';

const buttonStyle = 'w-[94px] h-[44px] ml-4 primary-btn';

export function FilterRangePrice({
  initialMin,
  initialMax,
  searchMin = initialMin,
  searchMax = initialMax,
  min,
  max,
}) {
  const [minValue, setMinValue] = useState(searchMin);
  const [maxValue, setMaxValue] = useState(searchMax);
  
  const updateQueryString = useUpdateQueryString();

  const handleSubmit = evt => {
    evt.preventDefault();
    updateQueryString({ min_price: minValue, max_price: maxValue });
  };

  const handleMin = e => {
    if (maxValue - minValue >= maxValue <= max) {
      if (parseInt(e.target.value) > parseInt(maxValue)) {

      } else {
        setMinValue(parseFloat(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseFloat(e.target.value));
      }
    }
  };

  const handleMax = e => {
    if (maxValue - minValue >= maxValue <= max) {
      if (parseInt(e.target.value) < parseInt(minValue)) {
      } else {
        setMaxValue(parseFloat(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseFloat(e.target.value));
      }
    }
  };
  const isButtonDisabled = minValue < min || maxValue > max || minValue > max || minValue > maxValue || maxValue < min || maxValue < minValue;
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[341px] flex-col py-4 tab:w-[688px] lap:w-[288px]"
    >
      <span
        className={[montserratMedium500.className, 'mb-4 text-gray-700'].join(
          ' '
        )}
      >
        Cena
      </span>

      <FilterSliderProgress
        minValue={minValue}
        maxValue={maxValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        max={max}
        min={min}
    
      />
      <FilterRangeInputs
        handleMin={handleMin}
        handleMax={handleMax}
        minValue={minValue}
        maxValue={maxValue}
        min={min}
        max={max}
      />
      <div className="mt-8 flex items-center">
        <FilterDigitalValuesRange
          setMinValue={setMinValue}
          setMaxValue={setMaxValue}
          minValue={minValue}
          maxValue={maxValue}
          searchMin={searchMin}
          searchMax={searchMax}
          min={min}
          max={max}
        />
        <ButtonSubmit
          buttonText={'Filtryj'}
          buttonStyle={buttonStyle}
          disabled={isButtonDisabled}
        />
      </div>
    </form>
  );
}
