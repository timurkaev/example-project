import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования
export const BugButton: FC = (): JSX.Element => {
    const [error, setError] = useState<boolean>(false);
    const { t } = useTranslation();

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrow}>
            {t('Выбросить ошибку')}
        </Button>
    );
};
