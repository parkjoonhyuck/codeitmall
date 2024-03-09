import starEmpty from '@/public/star-empty.svg';
import starFilled from '@/public/star-filled.svg';
import Image from 'next/image';

const RATINGS = [1, 2, 3, 4, 5];

export default function StarRating({ value = 1 }) {
  return (
    <span>
      {RATINGS.map((rating) =>
        value >= rating ? (
          <Image key={rating} src={starFilled} alt="★" />
        ) : (
          <Image key={rating} src={starEmpty} alt="✩" />
        )
      )}
    </span>
  );
}
6;
