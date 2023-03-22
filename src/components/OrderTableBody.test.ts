import { render, screen } from "@testing-library/react";

import OrderTable from "@/components/OrderTable";

describe("<OrderTable />", () => {

 test("데이터 ㅠㅠㅠ나와라ㅠㅠ(3개)", async () =>{
  render(<OrderTable />);
  const datas = await screen.findAllByRole("datalist");
  expect(datas).toHaveLength(3);
});
  });
