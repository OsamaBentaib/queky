interface Preview {
  poster?: string;
  url?: string;
}

type PreviewState = {
  preview?: Preview;
};

type PreviewAction = {
  type: string;
  preview: Preview;
};

type DispatchType = (args: PreviewAction) => PreviewAction;
