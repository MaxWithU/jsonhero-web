import { PreviewValue } from "./Preview/PreviewValue";
import { RelatedValues } from "./RelatedValues";
import { PropertiesValue } from "./Properties/PropertiesValue";
import { InfoHeader } from "./InfoHeader";
import { ContainerInfo } from "./ContainerInfo";
import { useSelectedInfo } from "~/hooks/useSelectedInfo";
import { useMemo } from "react";
import { useJson } from "~/hooks/useJson";
import { getRelatedPathsAtPath } from "~/utilities/relatedValues";
import { useJsonColumnViewState } from "~/hooks/useJsonColumnView";
import { useRelatedPaths } from "~/hooks/useRelatedPaths";

export function InfoPanel() {
  const selectedInfo = useSelectedInfo();
  const { selectedNodeId } = useJsonColumnViewState();
  const relatedPaths = useRelatedPaths();

  if (!selectedInfo) {
    return <></>;
  }

  const isSelectedLeafNode =
    selectedInfo.name !== "object" && selectedInfo.name !== "array";

  return (
    <>
      <div className="h-inspectorHeight p-4 bg-white border-l-[1px] border-slate-300 overflow-y-auto no-scrollbar transition dark:bg-slate-800 dark:border-slate-600">
        <InfoHeader relatedPaths={relatedPaths} />

        <div className="mb-4">
          <PreviewValue />
        </div>
        <PropertiesValue />

        <ContainerInfo />

        {isSelectedLeafNode && <RelatedValues relatedPaths={relatedPaths} />}
      </div>
    </>
  );
}
