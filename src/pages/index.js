const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3030');
    if (!response.ok) {
      throw new Error('データの取得に失敗しました');
    }

    return await response.json();
  } catch (error) {
    console.error('データの取得エラー:', error);
    throw error; // エラーを再スローして呼び出し元で処理できるようにする
  }
};

const Home = ({ frontData }) => {
  if (frontData) {
    return (
        <div>
          <h1>{frontData.message}</h1>
        </div>
    );
  } else {
    return <h1>データがありません</h1>;
  }
};

export async function getServerSideProps() {
  try {
    const frontData = await fetchData();
    return {
      props: { frontData },
    };
  } catch (error) {
    console.error('エラーが発生しました:', error);
    return {
      props: { frontData: null }, // データが取得できなかった場合、nullを返すなどの適切な処理を行う
    };
  }
}

export default Home;