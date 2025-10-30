import styles from './homepage.module.css';
import BlogSummaryList from '@/components/BlogSummaryList';

export default function Error404Page() {

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.mainHeading}>
                404 error
            </h1>
            <h3>Content not available! Please check the url and try again.</h3>
            {' '}
            <h2>or... Maybe it's one of these articles?</h2>
            <BlogSummaryList />
        </div>

    );
}