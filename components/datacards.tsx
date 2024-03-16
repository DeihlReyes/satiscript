import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const DataCards = () => {
  return (
    <div className="grid grid-cols-4 gap-8 w-full">
      <Card className="w-full text-center shadow-md shadow-slate-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Total Call</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-semibold text-5xl">50</p>
        </CardContent>
      </Card>

      <Card className="w-full text-center shadow-md shadow-slate-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Average Call Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-semibold text-5xl">
            4 <span className="font-light text-2xl">mins</span>
          </p>
        </CardContent>
      </Card>

      <Card className="w-full text-center shadow-md shadow-slate-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Satisfied Callers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-semibold text-5xl">30</p>
        </CardContent>
      </Card>

      <Card className="w-full text-center shadow-md shadow-slate-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Dissatisfied Callers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-semibold text-5xl">20</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataCards;
