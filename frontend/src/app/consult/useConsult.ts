import { useMutation } from "@tanstack/react-query";

interface UseConsultParams {
  type: "prompt" | "recommendations" | "steps" | "solve";
}

// for mocking purpose now
function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

const useConsult = ({ type }: UseConsultParams) => {
  const mutation = useMutation({
    mutationKey: ["consult", type],
    mutationFn: async (text: string) => {
      await wait(100);
      if (type === "prompt") {
        return [
          "Total sales revenue: RM230.00",
          "Most popular pizza: Pepperoni Pizza",
          "Date with highest sales: 18/06/2023",
        ];
      }
      if (type === "recommendations") {
        return [
          {
            recommendation: "Design me a sample of a poster",
            explanation:
              "Ensure an ample supply of ingredients and resources to meet the high demand for Pepperoni Pizza.",
          },
          {
            recommendation: "Promote Pepperoni Pizza",
            explanation:
              "Highlight Pepperoni Pizza in advertisements, social media campaigns, and special offers to attract more customers.",
          },
          {
            recommendation: "Promote Pepperoni Pizza",
            explanation:
              "Highlight Pepperoni Pizza in advertisements, social media campaigns, and special offers to attract more customers.",
          },
          {
            recommendation: "Promote Pepperoni Pizza",
            explanation:
              "Highlight Pepperoni Pizza in advertisements, social media campaigns, and special offers to attract more customers.",
          },
        ];
      }
      if (type === "steps") {
        return [
          "Show me a sample poster",
          "Who are the advertising agents to contact",
          "What social media platforms should I target",
          "What special offers should be included",
          "How can I track the success of my advertising efforts",
        ];
      }
      return "Highlight Pepperoni Pizza in advertisements and social media campaigns to create awareness and generate more interest among customers.";
    },
  });
  return mutation;
};

export default useConsult;
