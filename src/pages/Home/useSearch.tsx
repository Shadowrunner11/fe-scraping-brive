import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchClient } from '../../lib/modules';
import hashIt from 'hash-it';

export const useSearch = () => {
  const [text, setText] = useState<string | undefined>();
  const query = useQuery(
    [text ?? hashIt('nodata')],
    () => searchClient.searchScrap({ text: text ?? '' }),
    {
      enabled: !!text,
    },
  );

  return {
    search: useCallback((text: string) => {
      setText(text);
    }, []),
    ...query,
  };
};
