import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }): JSX.Element => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
