export default function throwErrorAtChance(chance: number) {
  const shouldError = Math.random() * 100 <= chance;
  if (shouldError) throw new Error(`${chance}%의 확률로 발생한 에러입니다.`);
}
